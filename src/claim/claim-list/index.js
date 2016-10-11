import React from 'react';
import { connect } from 'react-redux';

import { getClaims } from '../actions';
import T from '../../config/translate';


export class ClaimList extends React.Component {

    componentWillMount() {
        this.props.getClaims();
    }

    render() {
        return (
            <div className="m-t-3">
                <h4><T path="claim.claims" /> {this.props.isFetching && <img src="ajax-loader.gif" />}</h4>
                <table className="table">
                    <tbody>
                        {this.props.claims.map(claim => {
                            return (<tr key={claim.id}>
                                <td>{claim.ClaimNumber}</td>
                                <td>{claim.StatusCd}</td>
                                <td>{claim.LossDt}</td>
                                <td>{claim.LossCauseCd}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

ClaimList.propTypes = {
    isFetching: React.PropTypes.bool.isRequired,
    claims: React.PropTypes.array.isRequired,
    getClaims: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClaims: () => {dispatch(getClaims())}
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.claims.isFetching,
        claims: state.claims.items
    };
};

ClaimList = connect(mapStateToProps, mapDispatchToProps)(ClaimList);
