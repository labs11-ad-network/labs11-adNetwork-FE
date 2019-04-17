import React, { Component } from "react";
import { connect } from "react-redux";
import { AdContainer } from "./containerStyles";

import { getAffiliateAds } from "../../store/actions/adAction.js";
import { addStats } from "../../store/actions/analyticsAction";

class AdServer extends Component {
  state = {
    randomAd: "",
  }

  componentDidMount() {
    this.props.getAffiliateAds(this.props.match.params.affiliateId);
    this.getRandomAd()
    this.rotateInterval = setInterval(() => {
      this.getRandomAd()
    }, 15000)
  }

  componentWillUnmount(){
    clearInterval(this.rotateInterval);
  }

  getRandomAd = () => {
    if(this.props.ads.length){
      
      const filteredAds = this.props.ads.filter(ad => {
        return ad.size.includes(this.props.match.params.size);
      }).filter(ad => {
        return ad.active;
      });
      
      const randomAd = filteredAds[Math.floor(Math.random() * filteredAds.length)];
      
      this.setState({
        randomAd
      });

      this.recordImpression(randomAd && randomAd.agreement_id)
    }else{
      setTimeout(() => {
        this.getRandomAd()
      }, 1000);
    }
  }

  recordImpression = id => {
    this.props.addStats({
      action: "impression",
      userAgent: navigator.userAgent.toString(),
      referrer: document.referrer,
      agreement_id: id
    });
  }

  recordAction = e => {
    this.props.addStats({
      action: "click",
      userAgent: navigator.userAgent.toString(),
      referrer: document.referrer,
      agreement_id: this.state.randomAd.agreement_id
    });
  };

  render() {
    return (
      this.state.randomAd ?
      <a 
        href={`${this.state.randomAd.destination_url}/?affiliate=${this.props.match.params.affiliateId}&agreement=${this.state.randomAd.agreement_id || 0}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <AdContainer 
          image={this.state.randomAd.image} 
          onClick={this.recordAction} 
          size={this.state.randomAd.size}
          alt=""
        />
      </a> :
      <h1>loading...</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    ads: state.adReducer.affiliateAds
  };
};

export default connect(
  mapStateToProps,
  {
    getAffiliateAds,
    addStats
  }
)(AdServer);
