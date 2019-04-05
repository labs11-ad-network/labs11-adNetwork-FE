import React from "react";
import MaterialDatatable from "material-datatable";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import { OfferButton, OfferModalButton, TabButtonContainer } from "./offersStyles.js";
import { getOfferAds, deleteAd, changeAdStatus } from "../../store/actions/adAction.js";
import { createAgreement, deleteAgreement, updateAgreement } from "../../store/actions/agreementsAction.js";
import { getUserOffers, changeOfferStatus, deleteOffer } from "../../store/actions/offersAction.js";

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
      selectableRows: false
    },
    advertiserAdOptions: {
      filterType: "checkbox",
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
      selectableRows: false
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
    {
      name: "Status",
      options: {
        customBodyRender: value => {
          return value.accepted ? (
            <>
              <Switch
                checked={value.active}
                onChange={async () => {
                  this.props.updateAgreement(value.agreement_id, {active: !value.active});
                }}
                value="checkedB"
                color="primary"
              />
            </>
          ) : <p>Not Accepted</p>
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
                  tabValue: 1,
                  offer_id: value.id
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

  advertiserAdColumns = [
    {
      name: "Size",
      field: "size",
      options: {
        width: 70
      }
    },
    {
      name: "Ad",
      field: "name",
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

  affiliateAdColumns = [
    {
      name: "Size",
      field: "size",
      options: {
        width: 70
      }
    },
    {
      name: "Ad",
      field: "name",
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
          return <img src={value.image} alt="..."/>;
        }
      }
    }
  ];

  render() {
    const { classes, offerAds, offers, currentUser } = this.props;
    
    const { tabValue, advertiserOfferOptions, affiliateOfferOptions, affiliateAdOptions, advertiserAdOptions } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={tabValue} onChange={this.handleTabChange}>
            <Tab label="Offers" className={classes.tab} />
            {tabValue === 1 &&
            <Tab label="Ads" className={classes.tab} />
            }
            <TabButtonContainer>
              {this.props.currentUser.acct_type === "advertiser" && (
                <OfferModalButton onClick={() => this.props.toggleModal()}>
                  Create Offer
                </OfferModalButton>
              )}
            </TabButtonContainer>
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
                ? this.affiliateAdColumns
                : this.advertiserAdColumns
            }
            options={
              currentUser.acct_type === "affiliate"
                ? affiliateAdOptions
                : advertiserAdOptions
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerAds: state.adReducer.offerAds,
    currentUser: state.authReducer.currentUser,
    isFetchingOffers: state.offersReducer.isFetchingOffers
  };
};

export default connect(
  mapStateToProps,
  {
    getOfferAds,
    getUserOffers,
    changeOfferStatus,
    deleteOffer,
    createAgreement,
    deleteAgreement,
    updateAgreement,
    deleteAd,
    changeAdStatus,
  }
)(withStyles(styles)(OffersList));
