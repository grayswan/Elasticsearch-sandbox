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

  fetchSongs() {
    $.getJSON(this.props.songsPath, (data) => {
      this.setState({
        songs: data
      })
    })
  }

  searchSongs(event) {
    if (event.target.value) {
      $.getJSON(this.props.searchPath + ?query=" + event.target.value", (data) => {
        this.setState({
          songs: data
        })
      })
    } else {
      this.fetchSongs();
    }
  }

  render() {
    return (
      <div>
        <Songs songs={this.state.songs} />
        <SongsSearch
          searchPath={this.props.searchPath}
          submitPath={this.searchSongs}
          cancelPath={this.fetchSongs}
        />
      </div>
    )
  }
}
