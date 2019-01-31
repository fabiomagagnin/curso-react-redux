import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'

import {listarReceitas} from './ReceitasActions'

class Receitas extends Component {

    componentWillMount() {
        this.props.listarReceitas();
    }

    renderRows() {
        return (
            <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <ContentHeader title="Receitas" small='Listagem' />
                <Content>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({listarReceitas}, dispatch)
export default connect(null, mapDispatchToProps)(Receitas)
