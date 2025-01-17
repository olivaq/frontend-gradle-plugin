package org.siouan.frontendgradleplugin.infrastructure.gradle;

import static org.siouan.frontendgradleplugin.test.util.GradleBuildAssertions.assertTaskFailed;
import static org.siouan.frontendgradleplugin.test.util.GradleBuildAssertions.assertTaskSkipped;
import static org.siouan.frontendgradleplugin.test.util.GradleBuildAssertions.assertTaskSuccess;
import static org.siouan.frontendgradleplugin.test.util.GradleBuildAssertions.assertTaskUpToDate;
import static org.siouan.frontendgradleplugin.test.util.GradleBuildFiles.createBuildFile;
import static org.siouan.frontendgradleplugin.test.util.GradleHelper.runGradle;
import static org.siouan.frontendgradleplugin.test.util.GradleHelper.runGradleAndExpectFailure;
import static org.siouan.frontendgradleplugin.test.util.Resources.getResourceUrl;

import java.io.IOException;
import java.nio.file.Path;

import org.gradle.testkit.runner.BuildResult;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.siouan.frontendgradleplugin.FrontendGradlePlugin;
import org.siouan.frontendgradleplugin.test.util.FrontendMapBuilder;

/**
 * Functional tests to verify the {@link YarnGlobalInstallTask} integration in a Gradle build. Test cases uses a fake
 * Yarn distribution, to avoid the download overhead and because the 'yarn' executable is never called.
 */
class InstallYarnTaskFuncTest {

    @TempDir
    Path projectDirectoryPath;

    @Test
    void should_be_skipped_when_yarn_is_not_enabled() throws IOException {
        createBuildFile(projectDirectoryPath, new FrontendMapBuilder()
            .nodeVersion("14.17.3")
            .nodeDistributionUrl(getResourceUrl("node-v14.17.3.zip"))
            .toMap());

        final BuildResult result = runGradle(projectDirectoryPath, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);

        assertTaskSuccess(result, FrontendGradlePlugin.NODE_INSTALL_TASK_NAME);
        assertTaskSkipped(result, FrontendGradlePlugin.INSTALL_YARN_GLOBALLY_TASK_NAME);
        assertTaskSkipped(result, FrontendGradlePlugin.ENABLE_YARN_BERRY_TASK_NAME);
        assertTaskSkipped(result, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);
    }

    @Test
    void should_fail_when_yarn_version_is_not_set() throws IOException {
        final FrontendMapBuilder frontendMapBuilder = new FrontendMapBuilder()
            .nodeVersion("14.17.3")
            .nodeDistributionUrl(getResourceUrl("node-v14.17.3.zip"))
            .yarnEnabled(true);
        createBuildFile(projectDirectoryPath, frontendMapBuilder.toMap());

        final BuildResult result = runGradleAndExpectFailure(projectDirectoryPath,
            FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);

        assertTaskSuccess(result, FrontendGradlePlugin.NODE_INSTALL_TASK_NAME);
        assertTaskSuccess(result, FrontendGradlePlugin.INSTALL_YARN_GLOBALLY_TASK_NAME);
        assertTaskSuccess(result, FrontendGradlePlugin.ENABLE_YARN_BERRY_TASK_NAME);
        assertTaskFailed(result, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);
    }

    @Test
    void should_be_always_executed_when_yarn_is_enabled() throws IOException {
        final FrontendMapBuilder frontendMapBuilder = new FrontendMapBuilder()
            .nodeVersion("14.17.3")
            .nodeDistributionUrl(getResourceUrl("node-v14.17.3.zip"))
            .yarnEnabled(true)
            .yarnVersion("3.0.0");
        createBuildFile(projectDirectoryPath, frontendMapBuilder.toMap());

        final BuildResult result1 = runGradle(projectDirectoryPath, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);

        assertTaskSuccess(result1, FrontendGradlePlugin.NODE_INSTALL_TASK_NAME);
        assertTaskSuccess(result1, FrontendGradlePlugin.INSTALL_YARN_GLOBALLY_TASK_NAME);
        assertTaskSuccess(result1, FrontendGradlePlugin.ENABLE_YARN_BERRY_TASK_NAME);
        assertTaskSuccess(result1, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);

        final BuildResult result2 = runGradle(projectDirectoryPath, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);

        assertTaskUpToDate(result2, FrontendGradlePlugin.NODE_INSTALL_TASK_NAME);
        assertTaskSuccess(result2, FrontendGradlePlugin.INSTALL_YARN_GLOBALLY_TASK_NAME);
        assertTaskSuccess(result2, FrontendGradlePlugin.ENABLE_YARN_BERRY_TASK_NAME);
        assertTaskSuccess(result2, FrontendGradlePlugin.YARN_INSTALL_TASK_NAME);
    }
}
