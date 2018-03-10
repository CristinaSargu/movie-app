import React, {Component} 		from 'react';
import ReactDOM 							from 'react-dom';
import {Router, Route, browserHistory} 	from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import './style.scss';
import Header 				from './components/Header';
import SectionHome 		from './components/SectionHome';
import Section 				from './components/Section';
import SingleMovie 		from './components/SingleMovie';
import Trailer 				from './components/Trailer';
import SimilarMovies 	from './components/SimilarMovies';
import Search 				from './components/Search';
import Footer 				from './components/Footer';

class HomePage extends Component {
	render() {
		return (
			<div className="home-page">
				<header> <Header /> </header>
				<section> 
					<SectionHome 
					firstScreenTitle="Biggest Movie-wiki"
					firstScreenSubtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit aperiam !"
					pageClass="home-page"/> 
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

class PopularPage extends Component {
	render() {
		return (
			<div>
				<header> <Header /> </header>
				<section> 
					<Section 
					firstScreenTitle="The most popular"
					firstScreenSubtitle="Consectetur adipisicing elit aperiam"
					category="popular"/> 
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

class TopRatedPage extends Component {
	render() {
		return (
			<div>
				<header> <Header /> </header>
				<section> 
					<Section 
					firstScreenTitle="Top rated movies"
					firstScreenSubtitle="Consectetur adipisicing elit aperiam"
					category="top_rated"/> 
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

class UpcomingPage extends Component {
	render() {
		return (
			<div>
				<header> <Header /> </header>
				<section> 
					<Section 
					firstScreenTitle="Upcoming movies"
					firstScreenSubtitle="Consectetur adipisicing elit aperiam"
					category="upcoming"/> 
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

class SearchMoviePage extends Component {
	render() {
		return (
			<div>
				<header> <Header /> </header>
				<section> 
					<Search /> 
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

class SingleMoviePage extends Component {
	render() {
		return (
			<div>
				<header> <Header /> </header>
				<section className="singleItemSection"> 
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<SingleMovie id={this.props.params.id} pageClass="singleMovie"/>
							</div>
						</div>
					</div>
				</section>
				<section className=""> 
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Trailer id={this.props.params.id} pageClass="singleMovie"/>
							</div>
						</div>
					</div>
				</section>
				<section className="similarMovies"> 
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h3 className="similar-wrapper-title">Similar movies</h3>
								<SimilarMovies id={this.props.params.id} pageClass="singleMovie"/>
							</div>
						</div>
					</div>
				</section>
				<footer><Footer /></footer>
			</div>
		);
	}
}

const storeInstance = store();

ReactDOM.render((
  	<Provider store={storeInstance}>
  		<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
  		    <Route path="/" component={HomePage} />
  		    <Route path="/popular" component={PopularPage} />
  		    <Route path="/top_rated" component={TopRatedPage} />
  		    <Route path="/upcoming" component={UpcomingPage} />
  		    <Route path="/search" component={SearchMoviePage} />
  		    <Route path="/movie/:id" component={SingleMoviePage} />
  		</Router>
  	</Provider>
  ), document.getElementById('root')
);
