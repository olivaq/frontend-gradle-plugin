(window.webpackJsonp=window.webpackJsonp||[]).push([[65,11,14,21,23,24,64],{208:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(71),o=n(94),l=n(53),c=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.tasks+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(71),o=n(94),l=n(53),c=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.configuration+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(214),l=r.a.component("fgp-task",{components:{fgpTaskLinkAnchor:o.default},props:{name:{type:String,required:!0},type:{type:Boolean,default:!1}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[n("fgp-task-link-anchor",{attrs:{name:t.name}}),t._v(" "),t.type?[t._v("Type")]:[t._v("Task")],t._v(" "),n("fgp-code",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v("\n            -\n            "),t._t("title"),t._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],2)]),t._v(" "),n("section",{staticClass:"px-3"},[t._t("description")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(72).default})},214:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-task-link-anchor",{props:{name:{type:String,required:!0}}}),o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-info",attrs:{id:t.name}},[t._v("#")])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(54),l=r.a.component("fgp-gradle-docs-link",{components:{fgpLink:o.default},props:{path:{type:String,default:null}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:"https://docs.gradle.org"+t.path}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(219),l=r.a.component("fgp-gradle-task-outcome-link",{components:{fgpGradleDocsLink:o.default},props:{outcome:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/more_about_tasks.html#sec:task_outcomes"}},[t._v(t._s(t.outcome))])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(71),o=n(220),l=n(210),c=n(212),d=n(208),f=r.a.component("fgp-assemble-frontend-task",{components:{fgpCode:code.default,fgpGradleTaskOutcomeLink:o.default,fgpPropertyLink:l.default,fgpTask:c.default,fgpTaskLink:d.default}}),m=n(4),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-task",{attrs:{name:"assembleFrontend"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Assemble frontend artifacts")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        This task allows to execute a frontend build script as part of a Gradle build. The build script shall be\n        defined in the "),n("fgp-code",[t._v("package.json")]),t._v(" file, and the\n        "),n("fgp-property-link",{attrs:{name:"assembleScript"}}),t._v(" property shall be set with the corresponding\n        "),n("fgp-code",[t._v("npm")]),t._v("/"),n("fgp-code",[t._v("yarn")]),t._v(" command. This task depends on the\n        "),n("fgp-task-link",{attrs:{name:"installFrontend"}}),t._v(" task, and is skipped if the\n        "),n("fgp-property-link",{attrs:{name:"assembleScript"}}),t._v(" property is "),n("fgp-code",[t._v("null")]),t._v(". Apart from direct\n        execution, the task is also executed when the Gradle lifecycle\n        "),n("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/base_plugin.html#sec:base_tasks"}},[t._v("assemble")]),t._v(" task is executed.\n\n        "),n("div",{staticClass:"card my-3"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("About task execution")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\n                    If you execute this task several times in a row, you may notice the\n                    "),n("fgp-code",[t._v("npm")]),t._v("/"),n("fgp-code",[t._v("yarn")]),t._v(" command is always executed: Gradle does not\n                    skip the task based on a previous execution with the\n                    "),n("fgp-gradle-task-outcome-link",{attrs:{outcome:"SUCCESS"}}),t._v(" outcome. This is the expected behaviour\n                    because the task does not declare any input/output Gradle could track, to know the task is\n                    already "),n("fgp-gradle-task-outcome-link",{attrs:{outcome:"UP-TO-DATE"}}),t._v(" - unlike the\n                    "),n("fgp-task-link",{attrs:{name:"installNode"}}),t._v(" and "),n("fgp-task-link",{attrs:{name:"installYarn"}}),t._v(" tasks. The task\n                    provides the ability to plug the developer's own Javascript build process to Gradle, and nothing\n                    more. Every Javascript build process is unique: it depends on the project, the languages\n                    involved (e.g. TypeScript, JSX, ECMA script, SASS, SCSS...), the directory layout, the build\n                    utilities (Webpack...), etc, chosen by the team. Moreover, some build utilities are already able\n                    to build frontend artifacts incrementally. The plugin does not duplicate this logic. If you are\n                    about to tweak this task, take a look at these\n                    "),n("fgp-site-link",{attrs:{path:"#tweaking-tasks"}},[t._v("recommendations")]),t._v(".\n                ")],1)])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);