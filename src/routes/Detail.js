import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    // const { location } = this.props;
    // return <span>{location.state.title}</span>;
    // if문이 없이 바로 movie-detail 로 접근하면 문제가 발생
    // 왜? render() 다음에 componentDidmount()가 실행되니까.
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
// function Detail(props) {
//   console.log(props);
//   return <span>hello</span>;
// }
