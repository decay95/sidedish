import styled from 'styled-components';
import { F_basic } from '../../../Assets/CommonStyle';
import Card from './Card';
import InfoModal from '../info-modal';
import { useState } from 'react';

const List = styled.div`
  ${F_basic}
  width: calc(100% + ${(props) => props.itemGap});
  margin-left: calc(-${(props) => props.itemGap} / 2);
  transition: 0.3s ease-out;

  > div {
    flex-shrink: 0;
    width: calc(
      (100% / ${(props) => props.viewItemCount}) - ${(props) => props.itemGap}
    );
    margin: 0 calc(${(props) => props.itemGap} / 2);
  }
`;

export default function FoodList({ food, viewItemCount, itemGap, slider }) {
  const [isClick, setIsClick] = useState(false);
  const [cardHash, setCardHash] = useState('');
  const card = food.map((data) => (
    <Card
      key={data.detail_hash}
      cardData={data}
      setClick={setIsClick}
      setCardHash={setCardHash}
    />
  ));

  return (
    <>
      <List viewItemCount={viewItemCount} itemGap={itemGap} ref={slider}>
        {card}
      </List>
      {!isClick ? null : <InfoModal hash={cardHash} isClick={setIsClick} />}
    </>
  );
}
