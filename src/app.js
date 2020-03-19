

class RequestView extends React.Component {


  constructor(props) {
    super(props)
    this.state = { users: [], showposts: true }
    this.handleClick = this.handleClick.bind(this)

  }
  handleClick() {
    fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ users: data })
      })
      .catch(e => console.log('错误:', e))
  }

  togglePost() {
    const togglePost = this.state.showposts
    this.setState({
      showposts: !togglePost
    })
  }
  render() {
    return (
      <div>
        <input type="button" value="fetch data" onClickCapture={this.handleClick} />
        <button onClick={this.togglePost}>show/hide</button>
        <div>
          {this.state.showposts &&
            this.state.users.map((item, index) => (
              <table key={index.toString()}>
                <thead>
                  <tr>
                    <th>{item.userId}</th>
                    <th>{item.id}</th>
                    <th>{item.title}</th>
                    <th>{item.body}</th>
                  </tr>
                </thead>
              </table>
            ))}
        </div>
      </div>
    )
  }
}
ReactDOM.render(<RequestView />, document.getElementById('app'));
