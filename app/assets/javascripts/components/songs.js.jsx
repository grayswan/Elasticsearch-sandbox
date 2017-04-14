class Songs extends React.Component {
  render() {
    const showSongs = (song) => <Song name={song.name} artist={song.artist} key={song.id}/>;
    return (
      <ul>{this.props.songs.map(showSongs)}</ul>
    )
  }
}
