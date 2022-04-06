import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../Assets/blog.jpg';
import * as SiteActions from '../store/actions/siteActions';
import BlogItem from '../Common/BlogItem';

class Blog extends Component {
  componentDidMount() {
      this.props.getPosts(0);
  }


  render() { 
    return (
      <div>
           <Header 
                title = "Blog"
                subtitle = "Welcome to My Blog"
                showButton = {false}
                image = {image}
              />
               <section className="page-section bg-light" id="portfolio">
            <div className="container">
                
                <div className="row">
                {this.props.site.posts ?
                this.props.site.posts.length > 0 ?
                  this.props.site.posts.map((post, i) => {
                    return (
                      <BlogItem
                        post={post}
                        key={i}
                        />
                    )
                  })
              : null 
              : null}
                </div>
            </div>
        </section>       
      </div>
    );
  }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
  getPosts: (skip) => {
    dispatch(SiteActions.getPosts(skip));
  }
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Blog));