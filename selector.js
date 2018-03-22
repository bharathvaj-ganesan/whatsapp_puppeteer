module.exports = {
	// user to chat with selector. We will "click" this selector so that chat window of
	// specified user is opened. XXX will be replaced by actual user.
	user_chat: '#pane-side span[title="XXX"]',

	search_user_account: '#input-chatlist-search',

	user_name_in_search: 'span[title="XXX"]',

	// textbox selector where message will be typed
	chat_input: '#main > footer div.selectable-text[contenteditable]',

	// used to read last message sent by other person
	last_message: '#main div.message-in',

	// last message sent by you
	last_message_sent: '#main div.message-out.message-chat span.selectable-text:last-child',

	// used to check if your messsage was read
	last_message_read: '#main div.message-out.message-chat div.status-icon:last-child',

	// gets username for conversation thread
	user_name: '#main > header span[title]',

	// checks if there are new messages by any users
	new_message_user: '#pane-side div.CxUIE span[title]'
};
