class Song extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.artist}</h4>
		    <p>{this.props.name}</p>
      </div>
    )
  }
}
