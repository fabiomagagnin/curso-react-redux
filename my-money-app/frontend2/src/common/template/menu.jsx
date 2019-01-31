import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='#billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>

        <MenuTree label='Meu Caixa Fácil' icon='edit'> 
            <MenuItem path='#receitas' label='Receitas' icon='usd' />
            <MenuItem path='#despesas' label='Despesas' icon='usd' />
        </MenuTree>        
    </ul>
)