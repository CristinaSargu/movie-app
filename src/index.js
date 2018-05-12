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
import SingleActor 		from './components/SingleActor';
import Search 				from './components/Search';
import Footer 				from './components/Footer';
import VoiceNav 			from './components/VoiceNav';


class HomePage extends Component {
	render() {
		return (
			<div className="home-page">
				
				<section> 
					<SectionHome 
						firstScreenTitle="Biggest Movie-wiki"
						firstScreenSubtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit aperiam !"
						pageClass="home-page"/> 
				</section>
			</div>
		);
	}
}

class PopularPage extends Component {
	render() {
		return (
			<div>
				<section> 
					<Section 
						firstScreenTitle="The most popular"
						firstScreenSubtitle="Consectetur adipisicing elit aperiam"
						category="popular"/> 
				</section>
			</div>
		);
	}
}

class TopRatedPage extends Component {
	render() {
		return (
			<div>
				<section> 
					<Section 
						firstScreenTitle="Top rated movies"
						firstScreenSubtitle="Consectetur adipisicing elit aperiam"
						category="top_rated"/> 
				</section>
			</div>
		);
	}
}

class UpcomingPage extends Component {
	render() {
		return (
			<div>
				<section> 
					<Section 
						firstScreenTitle="Upcoming movies"
						firstScreenSubtitle="Consectetur adipisicing elit aperiam"
						category="upcoming"/> 
				</section>
			</div>
		);
	}
}

class SearchMoviePage extends Component {
	render() {
		return (
			<div>
				<section> 
					<Search /> 
				</section>
			</div>
		);
	}
}

class SingleMoviePage extends Component {
	render() {
		return <SingleMovie type={this.props.params.media_type} id={this.props.params.id} />;
	}
}

class SingleActorPage extends Component {
	render() {
		return <SingleActor id={this.props.params.id} />;
	}
}

class App extends Component {
	render() {
		const {pathname} = this.props.location;

		return (
			<div>
				<header>
					<Header />
					<VoiceNav location={pathname}/>		
				</header>
				{this.props.children ? this.props.children : <HomePage />}
				<footer><Footer /></footer>
			</div>
		)
	}
}

const storeInstance = store();

ReactDOM.render((
  	<Provider store={storeInstance}>
  		<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
  		    <Route path="/" component={App}>
	  		    <Route path="/popular" component={PopularPage} />
	  		    <Route path="/top_rated" component={TopRatedPage} />
	  		    <Route path="/upcoming" component={UpcomingPage} />
	  		    <Route path="/search" component={SearchMoviePage} />
	  		    <Route path="/actor/:id" component={SingleActorPage} />
	  		    <Route path="/:media_type/:id" component={SingleMoviePage} />
	  		  </Route>
  		</Router>
  	</Provider>
  ), document.getElementById('root')
);
