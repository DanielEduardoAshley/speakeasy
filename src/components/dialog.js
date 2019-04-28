import React from "react";
import { Motion, spring } from 'react-motion';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './dialog.css';

class Dialog extends React.Component {
    render() {
        const { isOpen, onClose, message } = this.props;
        return (
            <>
            <TransitionGroup component={null}>
                {isOpen && (
                    <CSSTransition classNames="fade" timeout={300}>
                        <div className="dialog--overlay" onClick={onClose}>
                            <div className="dialog">{message}</div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <div>
                <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
                    {value => <div>{value.x}</div>}
                </Motion>
            </div>
            </>
      );
    }
}

export default Dialog;