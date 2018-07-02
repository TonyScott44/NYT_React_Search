import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, topic:"" , startYear:"", endYear:""})
            )
            .catch(err => console.log(err));
    };

    deleteArticle= id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic) {
            API.getNew({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })

                .then(res => this.loadArticles())
                .catch(err => console.log(err));
        }

    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size= "m-12 lg-12">
                    <Jumbotron>
                        <h1>NYT Article GEN</h1>
                    </Jumbotron>
                        <form>
                            <h2>Search</h2>
                            <Input
                                value={this.state.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="Topic"
                            />
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start Year"
                            />
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End Year"
                            />
                            <FormBtn
                                disabled={!(this.state.topic)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>

                    <Col size="m-12 lg-12">
                        <h2>Results</h2>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        <Link to={"/articles/" + article._id}>
                                            <strong>
                                                {article.title} by {article.author}
                                            </strong>
                                        </Link>
                                        <SaveBtn onClick={() => this.saveArticle(article._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>

                    <Col size="m-12 lg-12">
                        <h2>Saved Articles</h2>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        <Link to={"/articles/" + article._id}>
                                            <strong>
                                                {article.title} by {article.author}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.saveArticle(article._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Articles;
