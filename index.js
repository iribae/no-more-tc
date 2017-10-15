const Command = require('command')
module.exports = function nomoretc(dispatch) {
	const command = Command(dispatch)
	let enabled = true
	let agressive = false
	
	command.add('tcblock', () => {
		enabled = !enabled
		command.message('best tank buff spam blocker '+(enabled?'enabled':'disabled')+'.')
	})
	
	command.add('tcfull', () => {
		enabled = true
		agressive = !agressive
		command.message('blocking all traverse cut buff packets '+(agressive?'enabled':'disabled')+'.')
	})
	
	dispatch.hook('S_ABNORMALITY_BEGIN', 2, (event) => {
		if(!enabled){return true}
		if(event.id==101300 && event.stacks != 13) {return false}
		if(!agressive && event.id==101300) {return false}
	})
}
