import React from "react";
import MaterialDatatable from "material-datatable";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import {
  OfferButton,
  OfferModalButton,
  TabButtonContainer,
  AdPreview
} from "./offersStyles.js";
import {
  getOfferAds,
  deleteAd,
  changeAdStatus
} from "../../store/actions/adAction.js";
import {
  createAgreement,
  deleteAgreement,
  updateAgreement
} from "../../store/actions/agreementsAction.js";
import {
  changeOfferStatus,
  deleteOffer,
  startUpdatingOffer
} from "../../store/actions/offersAction.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    width: "30%",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  table: {
    padding: "25px",
    backgroundColor: "#F1F1F1"
  }
});

class OffersList extends React.Component {
  state = {
    tabValue: 0,
    currentAgreement: 0,
    offer_id: "",
    advertiserOfferOptions: {
      filterType: "checkbox",
      responsive: "scroll",
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
      responsive: "scroll",
      selectableRows: false
    },
    advertiserAdOptions: {
      filterType: "checkbox",
      responsive: "scroll",
      showSelectedRowsToolbar: true,
      rowCursorHand: true,
      onRowsDelete: value => {
        if (window.confirm(`Are you sure you want to delete selected ad?`)) {
          this.props.deleteAd(this.props.offerAds[value.data[0].dataIndex].id);
        }
      }
    },
    affiliateAdOptions: {
      filterType: "checkbox",
      responsive: "scroll",
      selectableRows: false
    }
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  /* ------------------------------ Columns for Affiliate Offers ------------------------------ */
  affiliateOfferColumns = [
    /* ------------------------------ Offer Name Column ------------------------------ */
    {
      name: "Name",
      field: "name",
      options: {
        width: 70
      }
    },
    /* ------------------------------ Offer Description Column ------------------------------ */
    {
      name: "Description",
      field: "description",
      options: {
        width: 550
      }
    },
    /* ------------------------------ Offer Category Column ------------------------------ */
    {
      name: "Category",
      field: "category",
      options: {
        width: 170
      }
    },
    /* ------------------------------ Offer PPC Column ------------------------------ */
    {
      name: "Price Per Click",
      field: "price_per_click",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_click} ${value.currency}`;
        }
      }
    },
    /* ------------------------------ Offer PPI Column ------------------------------ */
    {
      name: "Price Per Impression",
      field: "price_per_impression",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_impression} ${value.currency}`;
        }
      }
    },
    /* ------------------------------ Offer Agreement Options Column ------------------------------ */
    {
      name: "Agreement",
      options: {
        customBodyRender: value => {
          return value.accepted ? (
            <>
              <OfferButton
                color="#04CF47"
                accepted={true}
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
            </>
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
    },
    /* ------------------------------ Offer Agreement Status Column ------------------------------ */
    {
      name: "Status",
      options: {
        customBodyRender: value => {
          return value.accepted ? (
            <>
              <Switch
                checked={value.active}
                onChange={async () => {
                  this.props.updateAgreement(value.agreement_id, {
                    active: !value.active
                  });
                }}
                value="checkedB"
                color="primary"
              />
            </>
          ) : (
            <p>Not Accepted</p>
          );
        }
      }
    }
  ];

  /* ------------------------------ Columns for Advertiser Offers ------------------------------ */
  advertiserOfferColumns = [
    /* ------------------------------ Offer Name Column ------------------------------ */
    {
      name: "Name",
      field: "name",
      options: {
        width: 70
      }
    },
    /* ------------------------------ Offer Description Column ------------------------------ */
    {
      name: "Description",
      field: "description",
      options: {
        width: 550
      }
    },
    /* ------------------------------ Offer Category Column ------------------------------ */
    {
      name: "Category",
      field: "category",
      options: {
        width: 170
      }
    },
    /* ------------------------------ Offer Budget Column ------------------------------ */
    {
      name: "Budget",
      field: "budget",
      options: {
        customBodyRender: value => {
          return `$${value.budget} ${value.currency}`;
        }
      }
    },
    /* ------------------------------ Offer PPC Column ------------------------------ */
    {
      name: "Price Per Click",
      field: "price_per_click",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_click} ${value.currency}`;
        }
      }
    },
    /* ------------------------------ Offer PPI Column ------------------------------ */
    {
      name: "Price Per Impression",
      field: "price_per_impression",
      options: {
        customBodyRender: value => {
          return `$${value.price_per_impression} ${value.currency}`;
        }
      }
    },
    /* ------------------------------ Offer Status Column ------------------------------ */
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
    /* ------------------------------ Offer Options Column ------------------------------ */
    {
      name: "Offer Options",
      options: {
        customBodyRender: value => {
          return (
            <>
              <OfferButton
                first
                color="#0A88DC"
                onClick={() => {
                  this.setState({
                    tabValue: 1,
                    offer_id: value.id
                  });
                  this.props.getOfferAds(value.id);
                }}
              >
                View Ads
              </OfferButton>
              <OfferButton
                color="#0A88DC"
                onClick={async () => {
                  await this.props.startUpdatingOffer(value);
                  this.props.toggleModal();
                }}
              >
                Edit Offer
              </OfferButton>
            </>
          );
        }
      }
    }
  ];

  /* ------------------------------ Columns for Advertiser Ads ------------------------------ */
  advertiserAdColumns = [
    /* ------------------------------ Ad Size Column ------------------------------ */
    {
      name: "Size",
      field: "size",
      options: {
        width: 70
      }
    },
    /* ------------------------------ Ad Name Column ------------------------------ */
    {
      name: "Ad",
      field: "name",
      options: {
        width: 150
      }
    },
    /* ------------------------------ Ad Preview Column ------------------------------ */
    {
      name: "Preview",
      field: "image",
      options: {
        width: 170,
        customBodyRender: value => {
          console.log(value)
          return <AdPreview image={value.image} size={value.size}/>;
        }
      }
    },
    {
      name: "Ad Status",
      options: {
        customBodyRender: value => {
          return (
            <Switch
              checked={value.active}
              onChange={async () => {
                this.props.changeAdStatus(value, this.state.offer_id);
              }}
              value="checkedB"
              color="primary"
            />
          );
        }
      }
    }
  ];

  /* ------------------------------ Columns for Affiliate Ads ------------------------------ */
  affiliateAdColumns = [
    /* ------------------------------ Ad Size Column ------------------------------ */
    {
      name: "Size",
      field: "size",
      options: {
        width: 70
      }
    },
    /* ------------------------------ Ad Name Column ------------------------------ */
    {
      name: "Ad",
      field: "name",
      options: {
        width: 150
      }
    },
    /* ------------------------------ Ad Preview Column ------------------------------ */
    {
      name: "Preview",
      field: "image",
      options: {
        width: 170,
        customBodyRender: value => {
          return <AdPreview image={value.image} size={value.size}/>;
        }
      }
    }
  ];

  render() {
    const { classes, offerAds, offers, currentUser, toggleModal } = this.props;

    const {
      tabValue,
      advertiserOfferOptions,
      affiliateOfferOptions,
      affiliateAdOptions,
      advertiserAdOptions
    } = this.state;

    return (
      <div className={classes.root} data-btn="offer-list">
        <AppBar position="static">
          <Tabs value={tabValue} onChange={this.handleTabChange}>
            {/* ------------------------------ Offers Tab ------------------------------ */}
            <Tab label="Offers" className={classes.tab} />
            {/* ------------------------------ Ads Tab ------------------------------ */}
            {tabValue === 1 && 
              <Tab label="Ads" className={classes.tab} />
            }
            <TabButtonContainer>
              {/* ------------------------------ Create Offer Button ------------------------------ */}
              {currentUser.acct_type === "advertiser" && (
                <OfferModalButton 
                  onClick={() => toggleModal()} 
                  data-btn='create_offer-button'
                >
                  Create Offer
                </OfferModalButton>
              )}
            </TabButtonContainer>
          </Tabs>
        </AppBar>
        <div className={classes.table}>
          {/* ------------------------------ Offers Tab ------------------------------ */}
          {tabValue === 0 && (
            <MaterialDatatable
              className={classes.table}
              title={"Offers List"}
              /* ------------------------------ Conditionally filtering Offers ------------------------------ */
              data={
                currentUser.acct_type === "affiliate"
                  ? offers.filter(offer => offer.status)
                  : offers
              }
              /* ------------------------------ Conditionally rendering Columns ------------------------------ */
              columns={
                currentUser.acct_type === "affiliate"
                  ? this.affiliateOfferColumns
                  : this.advertiserOfferColumns
              }
              /* ------------------------------ Conditionally rendering Options ------------------------------ */
              options={
                currentUser.acct_type === "affiliate"
                  ? affiliateOfferOptions
                  : advertiserOfferOptions
              }
            />
          )}
          {/* ------------------------------ Ads Tab ------------------------------ */}
          {tabValue === 1 && (
            <MaterialDatatable
              title={"Ads List"}
              data={offerAds}
              /* ------------------------------ Conditionally rendering Columns ------------------------------ */
              columns={
                currentUser.acct_type === "affiliate"
                  ? this.affiliateAdColumns
                  : this.advertiserAdColumns
              }
              /* ------------------------------ Conditionally rendering Options ------------------------------ */
              options={
                currentUser.acct_type === "affiliate"
                  ? affiliateAdOptions
                  : advertiserAdOptions
              }
            />
          )}
        </div>
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
    changeOfferStatus,
    startUpdatingOffer,
    deleteOffer,
    createAgreement,
    deleteAgreement,
    updateAgreement,
    getOfferAds,
    deleteAd,
    changeAdStatus
  }
)(withStyles(styles)(OffersList));
