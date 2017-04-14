class SongsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
  }

  componentWillMount() {
    this.fetchSongs();
  }

  render() {
    return (
      <div>
        <SongsSearch
          searchPath={this.props.searchPath}
          submitPath={this.searchSongs.bind(this)}
          cancelPath={this.fetchSongs.bind(this)}
        />
        <Songs songs={this.state.songs} />
      </div>
    )
  }

  fetchSongs() {
    $.getJSON(this.props.songsPath, (data) => {
      this.setState({
        songs: data
      })
    })
  }

  searchSongs(event) {
    if (event.target.value) {
      $.getJSON(this.props.searchPath + "?query=" + event.target.value, (data) => {
        this.setState({
          songs: data
        })
      })
    } else {
      this.fetchSongs();
    }
  }
}
