const Command = require('command')
module.exports = function nomoretc(dispatch) {
	const command = Command(dispatch)
	let enabled = true
	command.add('tcblock', () => {
		enabled = !enabled
		command.message('best tank buff spam blocker '+(enabled?'enabled':'disabled')+'.')
	})
	dispatch.hook('S_ABNORMALITY_BEGIN', 2, (event) => {
		if(!enabled){return true}
		if(id=101300) {return false}
	})
}
