import React from 'react';
import { Link } from 'react-router-dom';

import { 
    NavContainer, 
    LeftSection, 
    RightSection, 
    Header 
} from '../dashboardStyles.js';

const DashboardTop = props => {
    return (
        <NavContainer>
            <LeftSection>
                <Header><i className="fas fa-chart-line"/>Dashboard</Header>
                <select
                    name="selectedAdvertisement" 
                    required
                >
                    <option value>Select offer...</option>
                    {props.userOffers.length && props.userOffers.map(offer => {
                        return <option key={offer.id} value={offer.id}>{offer.name}</option>
                    })}
                </select>
                <Link to="/dashboard/create-ad">Create Advertisement</Link>
            </LeftSection>
            <RightSection>
                <i className="fas fa-bell"/>
                <div>
                    <img alt=""/>
                    <h2>John Doe</h2>
                </div>
            </RightSection>
        </NavContainer>
    )
}

export default DashboardTop