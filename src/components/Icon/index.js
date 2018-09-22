import React, {Component} from 'react';
import Icon from 'antd/lib/icon';

import 'antd/lib/icon/style/css.js';

class CustomIcon extends Component {
    render() {
        return (
            <Icon {...this.props} />
        )
    }
}

CustomIcon.defaultProps = {
    type: 'heart-o',
}

export default CustomIcon