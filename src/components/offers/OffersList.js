import React from "react";
import MaterialDatatable from "material-datatable";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import { OfferButton } from "./offersStyles.js";
import { getOfferAds } from "../../store/actions/adAction.js";
import { createAgreement } from "../../store/actions/agreementsAction.js";
import {
  getUserOffers,
  changeOfferStatus,
  deleteOffer
} from "../../store/actions/offersAction.js";
import AdHoc from "../ad-generator/AdHoc.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    width: "100%",
    fontSize: "0.9rem",
    fontWeight: "500"
  }
});

class OffersList extends React.Component {
  state = {
    tabValue: 0,
    currentAgreement: 0,
    offer_id: "",
    advertiserOfferOptions: {
      filterType: "checkbox",
      onlyOneRowCanBeSelected: true,
      rowCursorHand: true,
      onRowsDelete: value => {
        if (
          window.confirm(
            `Are you sure you want to delete ${
              this.props.offers[value.data[0].dataIndex].name
            }`
          )
        ) {
          this.props.deleteOffer(this.props.offers[value.data[0].dataIndex]);
        }
      }
    },
    affiliateOfferOptions: {
      filterType: "checkbox",
      onlyOneRowCanBeSelected: true,
      rowCursorHand: true,
      showSelectedRowsToolbar: false
    },
    adOptions: {
      filterType: "checkbox",
      onlyOneRowCanBeSelected: true,
      showSelectedRowsToolbar: false
    }
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  affiliateOfferColumns = [
    {
      name: "Name",
      field: "name",
      options: {
        width: 70
      }
    },
    {
      name: "Description",
      field: "description",
      options: {
        width: 550
      }
    },
    {
      name: "Category",
      field: "category",
      options: {
        width: 170
      }
    },
    {
      name: "Price Per Click",
      field: "price_per_click",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_click} ${value.currency}`;
        }
      }
    },
    {
      name: "Price Per Impression",
      field: "price_per_impression",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_impression} ${value.currency}`;
        }
      }
    },
    {
      name: "Agreement",
      options: {
        customBodyRender: value => {
          return value.accepted ? (
            <OfferButton
              color="#04CF47"
              onClick={() => {
                this.setState({
                  tabValue: 1,
                  currentAgreement: value.agreement_id
                });
                this.props.getOfferAds(value.id);
              }}
            >
              View Ads
            </OfferButton>
          ) : (
            <OfferButton
              color="#0A88DC"
              onClick={() => {
                this.props.createAgreement(value);
              }}
            >
              Accept Agreement
            </OfferButton>
          );
        }
      }
    }
  ];

  advertiserOfferColumns = [
    {
      name: "Name",
      field: "name",
      options: {
        width: 70
      }
    },
    {
      name: "Description",
      field: "description",
      options: {
        width: 550
      }
    },
    {
      name: "Category",
      field: "category",
      options: {
        width: 170
      }
    },
    {
      name: "Budget",
      field: "budget",
      options: {
        customBodyRender: value => {
          return `$${value.budget} ${value.currency}`;
        }
      }
    },
    {
      name: "Price Per Click",
      field: "price_per_click",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_click} ${value.currency}`;
        }
      }
    },
    {
      name: "Price Per Impression",
      field: "price_per_impression",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_impression} ${value.currency}`;
        }
      }
    },
    {
      name: "Offer Status",
      options: {
        customBodyRender: value => {
          return (
            <Switch
              checked={value.status}
              onChange={async () => {
                this.props.changeOfferStatus(value);
              }}
              value="checkedB"
              color="primary"
            />
          );
        }
      }
    },
    {
      name: "View Ads",
      options: {
        customBodyRender: value => {
          return (
            <OfferButton
              color="#0A88DC"
              onClick={() => {
                this.setState({
                  tabValue: 1
                });
                this.props.getOfferAds(value.id);
              }}
            >
              View Ads
            </OfferButton>
          );
        }
      }
    }
  ];

  adColumns = [
    {
      name: "Size",
      field: "size",
      options: {
        width: 70
      }
    },
    {
      name: "Ad",
      field: "message",
      options: {
        width: 150
      }
    },
    {
      name: "Preview",
      field: "image",
      options: {
        width: 170,
        customBodyRender: value => {
          return <img src={value.image} alt="..." />;
        }
      }
    }
  ];

  render() {
    const { classes, offerAds, offers, currentUser } = this.props;
    const {
      tabValue,
      advertiserOfferOptions,
      affiliateOfferOptions,
      adOptions
    } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={tabValue} onChange={this.handleTabChange}>
            <Tab label="Offers" className={classes.tab} />
            <Tab label="Ads" className={classes.tab} disabled />
          </Tabs>
        </AppBar>
        {tabValue === 0 && (
          <MaterialDatatable
            title={"Offers List"}
            data={
              currentUser.acct_type === "affiliate"
                ? offers.filter(offer => offer.status)
                : offers
            }
            columns={
              currentUser.acct_type === "affiliate"
                ? this.affiliateOfferColumns
                : this.advertiserOfferColumns
            }
            options={
              currentUser.acct_type === "affiliate"
                ? affiliateOfferOptions
                : advertiserOfferOptions
            }
          />
        )}

        {tabValue === 1 && (
          <MaterialDatatable
            title={"Ads List"}
            data={offerAds}
            columns={
              currentUser.acct_type === "affiliate"
                ? [
                    ...this.adColumns,
                    {
                      name: "Code Snippet",
                      options: {
                        customBodyRender: value => {
                          return `<iframe src="https://kieranlabs.netlify.com/ad/${
                            value.id
                          }/${this.state.currentAgreement}" 
                                    frameborder="0" 
                                    scrolling="no" 
                                    ${
                                      value.size.includes("horizontal")
                                        ? 'height="100" width="670"'
                                        : value.size.includes("vertical")
                                        ? 'height="670" width="100"'
                                        : value.size.includes("square") &&
                                          'height="265" width="265"'
                                    }
                                  ></iframe>`;
                        }
                      }
                    }
                  ]
                : this.adColumns
            }
            options={adOptions}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerAds: state.adReducer.offerAds,
    currentUser: state.authReducer.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    getOfferAds,
    getUserOffers,
    changeOfferStatus,
    deleteOffer,
    createAgreement
  }
)(withStyles(styles)(OffersList));
