import React from 'react'
import MaterialDatatable from "material-datatable";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const columns = [
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
    options: { 
      filterType: 'checkbox',
      onRowClick: (offer) => {
        this.setState({
          value: 1,
          offer_id: offer.id
        })
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { classes } = this.props;
    const { value } = this.state;
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
          data={this.props.offers}
          columns={columns}
          options={this.state.options}
        />}
        {value === 1 && 
          <MaterialDatatable
          title={"Ads List"}
          data={{name: 'juan'}}
          columns={columns}
          options={this.state.options}
        />}
      </div>
    )
  }
}

export default withStyles(styles)(OffersList);