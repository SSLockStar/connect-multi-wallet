import React from 'react'
import Button from '../../Button'
import Card from '../../Card'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'
import styled from 'styled-components'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
}

const StyledConnectButton = styled.div`
  width: 100px;
`


const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => (
  
    <Card>
      <CardContent onClick={onConnect}>
      <button className='fake-button'  onClick={onConnect}><CardIcon>{icon}</CardIcon></button>
      <button className='fake-button'  onClick={onConnect}><CardTitle text={title} /></button>
        <Spacer />
        <StyledConnectButton>
          <Button onClick={onConnect} text="Connect" />
        </StyledConnectButton>
      </CardContent>
    </Card>
  
)

export default WalletCard
