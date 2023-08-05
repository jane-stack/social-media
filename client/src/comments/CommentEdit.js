
function CommentEdit ({comments, closeEditMode, onEditComment}) {

    return (
        <form>
            <div>
            <input className="chat-textarea" type="text" name="body" />
            <br />
            <button type="submit">Finish Editing</button>
            <button onClick={closeEditMode}>Cancel</button>
            </div>
        </form>
    )
}

export default CommentEdit;