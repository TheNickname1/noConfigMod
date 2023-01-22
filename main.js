Events.on(ContentInitEvent, event => {
    Vars.content.blocks().each(b => {b.saveConfig = false;})
})