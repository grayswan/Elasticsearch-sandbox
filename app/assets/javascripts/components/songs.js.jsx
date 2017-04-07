class Songs extends React.Component {
  render() {
    return (
      const showSongs = (song) => <Song name={song.name} artist={song.artist} key={song.id}/>;
		  <ul>{this.props.songs.map(showSongs)}</ul>;
    )
  }
}
