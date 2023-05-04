const ButtonShowComments = ({ openCommentModal }) => {
  return (
    <button
      onClick={openCommentModal}
      className="btn btn-secondary btn-outline "
    >
      Comments
    </button>
  )
}
export default ButtonShowComments
