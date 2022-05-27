import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import styles from './Styles';
import Item from './Item';
import img from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

export default function Home() {
  const [reRender, setReRender] = useState(false);
  const [data, setData] = useState([
    {image: img, val: 0},
    {image: img2, val: 0},
    {image: img3, val: 0},
  ]);

  const handleLikeAll = () => {
    data.map(a => (a.val += 1));
    setReRender(prev => !prev);
  };

  const handleDislikeAll = () => {
    data.map(a => (a.val -= 1));
    setReRender(prev => !prev);
  };

  const handleResetAll = () => {
    data.map(a => (a.val = 0));
    setReRender(prev => !prev);
  };

  const handleLike = (item, index, val) => {
    data[index] = {
      ...item,
      val: val + 1,
    };
    setData(data);
    setReRender(prev => !prev);
  };

  const handleDislike = (item, index, val) => {
    data[index] = {
      ...item,
      val: val > 0 ? val - 1 : val,
    };
    setData(data);
    setReRender(prev => !prev);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.btnWrap}>
        <Button
          onPress={() => handleLikeAll()}
          btnText="Like All"
          color="blue"
          btnTextColor="white"
        />
        <Button
          onPress={() => handleResetAll()}
          elevation
          btnText="Reset All"
          btnTextColor="#505050"
        />
        <Button
          onPress={() => handleDislikeAll()}
          btnText="Dislike All"
          color="red"
          btnTextColor="white"
        />
      </View>
      <View>
        <FlatList
          style={styles.flat}
          data={data}
          vertical
          extraData={reRender}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Item
              value={item.val}
              img={item.image}
              onLike={() => handleLike(item, index, item.val)}
              onDislike={() => handleDislike(item, index, item.val)}
            />
          )}
        />
      </View>
    </View>
  );
}
