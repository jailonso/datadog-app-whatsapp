"use strict";(self.webpackChunkdatadog_app_example_starter_kit=self.webpackChunkdatadog_app_example_starter_kit||[]).push([[723],{723:function(e,n,o){o.r(n),o.d(n,{default:function(){return i}});var t=o(285);function i(){var e=(0,t.init)();!function(e){e.events.on(t.EventType.MODAL_ACTION,(function(){console.log("Confirmed!")})),e.events.on(t.EventType.MODAL_CANCEL,(function(){console.log("Denied!")})),e.events.on(t.EventType.MODAL_CLOSE,(function(e){console.log("User exited modal ".concat(e.key))})),e.events.onCustom("modal_button_click",(function(e){console.log("The user has clicked the button ".concat(e," times"))}))}(e),function(e){e.widgetContextMenu.onRequest((function(e){var n=e.widget;return{items:[{href:"https://docs.datadoghq.com/dashboards/widgets/".concat(n.definition.type,"/"),actionType:t.MenuItemType.LINK,key:"link-item",label:"Read about ".concat(n.definition.type," widgets"),order:3},{actionType:t.MenuItemType.EVENT,key:"sidepanel-trigger",label:"Open a sidepanel",order:1}]}})),e.events.on(t.EventType.WIDGET_CONTEXT_MENU_CLICK,(function(n){"sidepanel-trigger"===n.menuItem.key&&e.sidePanel.open({key:"custom-panel-from-controller",source:"panel"},{message:"Hi! I was sent here from the widget context menu \ud83d\udc4b"})}))}(e),function(e){e.dashboard.cogMenu.onRequest((function(){return{items:[{actionType:t.MenuItemType.LINK,href:"https://google.com",label:"link to google",key:"link",order:-1}]}})),e.events.on(t.EventType.WIDGET_SETTINGS_MENU_CLICK,(function(n){"open-confirmation"===n.menuItem.key&&e.modal.open({actionLabel:"Yes",cancelLabel:"Nevermind",title:"Please verify!",key:"confirmation-modal",actionLevel:t.ModalActionLevel.DANGER,message:"Are you sure really sure?"}),"open-custom-modal"===n.menuItem.key&&e.modal.open({key:"custom-modal",size:t.ModalSize.LARGE,source:"modal"},{message:"Hi! I was sent here from the custom widget settings menu \ud83d\udc4b",options:n.widget.definition.options}),"open-custom-panel"===n.menuItem.key&&(console.log("xxxx context",n),e.sidePanel.open({key:"custom-panel-from-controller",source:"panel",title:"Custom Sidepanel"},{message:"Hi! I was sent here from the custom widget settings menu \ud83d\udc4b",options:n.widget.definition.options}))})),e.events.on(t.EventType.DASHBOARD_COG_MENU_CLICK,(function(n){"open-confirmation"===n.menuItem.key&&e.modal.open({actionLabel:"Yes",cancelLabel:"Nevermind",title:"Please verify!",key:"confirmation-modal",actionLevel:t.ModalActionLevel.DANGER,message:"Are you sure really sure?"}),"open-custom-modal"===n.menuItem.key&&e.modal.open({key:"custom-modal",size:t.ModalSize.LARGE,source:"modal"},{message:"Hi! I was sent here from the dashboard cog menu \ud83d\udc4b"}),"open-custom-panel"===n.menuItem.key&&(console.log("xxxx context",n),e.sidePanel.open({key:"custom-panel-from-controller",source:"panel",title:"Custom Sidepanel"},{message:"Hi! I was sent here from the dashboard cog menu \ud83d\udc4b"}))}))}(e);var n=document.getElementById("root");n&&(n.innerHTML="\n    <div>\n      The application controller is running in the background.\n    </div>\n    <a href='http://localhost:3000/widget'> Click here to open your widget </a>\n  ")}}}]);
//# sourceMappingURL=723.75e5dab5.chunk.js.map