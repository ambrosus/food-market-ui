import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from './TransactionNotification.scss';
import classnames from "classnames";

export default class TransactionNotification extends Component {

    static APPROVED = 'Approved';
    static PENDING = 'Pending';
    static NOT_APPROVED = 'Not Approved';

    static propTypes = {
        notification: PropTypes.shape({
            status: PropTypes.string,
            time: PropTypes.string,
            type: PropTypes.string,
            address: PropTypes.string,
        })
    };

    render() {
        return (<div className={styles.notification}>
            <div className={styles.typeIcon}/>
            <div className={styles.description}>
                <div className={styles.header}>
                    <div className={styles.status}>Status: <span className={classnames({
                        [styles.approved]: this.props.notification.status === TransactionNotification.APPROVED,
                        [styles.pending]: this.props.notification.status === TransactionNotification.PENDING,
                        [styles.notApproved]: this.props.notification.status === TransactionNotification.NOT_APPROVED,
                    })}>{this.props.notification.status}</span></div>
                    <div className={styles.time}>{this.props.notification.time}</div>
                </div>
                <div className={styles.type}>{this.props.notification.type}</div>
                <div className={styles.address}>{this.props.notification.address}</div>
            </div>
        </div>);
    }
}