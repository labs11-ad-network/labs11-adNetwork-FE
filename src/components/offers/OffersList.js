import React from 'react'
import MaterialDatatable from "material-datatable";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';

import { getOfferAds } from '../../store/actions/adAction.js'
import { HorizontalBanner } from '../ad-generator/templates';

const offerColumns = [
  {   
      name: 'Name', 
      field: 'name',
      options: {
          width: 70,
      },
  },
  {
      name: 'Description', 
      field: 'description',
      options: {
          width: 550,
      },
  },
  {
      name: 'Category', 
      field: 'category',
      options: {
          width: 170,
      },
  },
  {
      name: 'Budget', 
      field: 'budget'
  },
  {
      name: 'Price Per Click', 
      field: 'price_per_click'
  },
  {
      name: 'Price Per Impression', 
      field: 'price_per_impression',
  }
];

const adColumns = [
  {   
      name: 'Size', 
      field: 'size',
      options: {
          width: 70,
      },
  },
  {
      name: 'Ad', 
      field: 'message',
      options: {
          width: 150,
      },
  },
  {
      name: 'Preview', 
      field: 'back_img',
      options: {
          width: 170,            
          customBodyRender: (value) => {
            console.log(value)
            return <HorizontalBanner ad={value}/>; 
        }
      },
  },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    width: '50%'
  }
});

class OffersList extends React.Component{
  state = {
    value: 0,
    offer_id: '',
    options: { 
      filterType: 'checkbox',
      onRowClick: (offer) => {
        this.setState({
          value: 1,
        });
        this.props.getOfferAds(offer.id);
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { classes, offerAds, offers } = this.props;
    const { value, options } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} className={classes.tabContainer}>
            <Tab label="Offers" className={classes.tab}/>
            <Tab label="Ads" className={classes.tab}/>
          </Tabs>
        </AppBar>
        {value === 0 &&
        <MaterialDatatable
          title={"Offers List"}
          data={offers}
          columns={offerColumns}
          options={options}
        />}
        {value === 1 && 
          <MaterialDatatable
          title={"Ads List"}
          data={offerAds}
          columns={adColumns}
        />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    offerAds: state.adReducer.offerAds
  }
}

export default connect(
  mapStateToProps,
  {
    getOfferAds
  }
)(withStyles(styles)(OffersList));