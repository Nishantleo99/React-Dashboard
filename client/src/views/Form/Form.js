import React from 'react';
import axios from 'axios';
import '../../assets/css/dashboard.css';

class App extends React.Component {

    state={
        reviews: '',
        rating: '',
        sentiment: '',
        jan: '',
        feb: '',
        mar: '',
        apr: '',
        may: '',
        jun: '',
        jul: '',
        aug: '',
        sept: '',
        oct: '',
        nov: '',
        dec: '',
        posts: []
    };

    componentDidMount = () => {
        this.getBlogPost();
    };

    getBlogPost = () => {
        axios.get('/api')
        .then((response) => {
          const data = response.data;
          this.setState({ posts: data });
          console.log('Data has been recieved');
        })
        .catch(() => {
          alert('Error retrieving data');
        });
      };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            reviews: this.state.reviews,
            rating: this.state.rating,
            sentiment: this.state.sentiment,
            jan: this.state.jan,
            feb: this.state.feb,
            mar: this.state.mar,
            apr: this.state.apr,
            may: this.state.may,
            jun: this.state.jun,
            jul: this.state.jul,
            aug: this.state.aug,
            sept: this.state.sept,
            oct: this.state.oct,
            nov: this.state.nov,
            dec: this.state.dec
        };

        axios({
            url:'/api/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log("Data has been sent to the server");
            this.getBlogPost();
        })
        .catch(() => {
            console.log("Internal Server Error");
        });


    };


    render(){
        return(
            <div>
                <h2>Fill to Generate the Annual Analysis</h2>
                <form className="form-style" onSubmit={this.submit}>
                    <div className="form-input">
                        <input
                        type="text"
                        name="reviews"
                        placeholder="Reviews"
                        value={this.state.reviews}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="rating"
                        placeholder="AV. Rating"
                        value={this.state.rating}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="sentiment"
                        placeholder="Sentiment Analysis"
                        value={this.state.sentiment}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="jan"
                        placeholder="January"
                        value={this.state.jan}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="feb"
                        placeholder="February"
                        value={this.state.feb}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="mar"
                        placeholder="March"
                        value={this.state.mar}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="apr"
                        placeholder="April"
                        value={this.state.apr}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="may"
                        placeholder="May"
                        value={this.state.may}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="jun"
                        placeholder="June"
                        value={this.state.jun}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="jul"
                        placeholder="July"
                        value={this.state.jul}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="aug"
                        placeholder="August"
                        value={this.state.aug}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="sept"
                        placeholder="September"
                        value={this.state.sept}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="oct"
                        placeholder="October"
                        value={this.state.oct}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="nov"
                        placeholder="November"
                        value={this.state.nov}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <input
                        type="text"
                        name="dec"
                        placeholder="December"
                        value={this.state.dec}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App;