import {View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import Button from './Button';

export default function Item(props) {
  const {img, value, onLike, onDislike} = props;
  return (
    <View style={styles.imgWrap}>
      <View>
        <Image style={styles.img} source={img} />
      </View>
      <View style={styles.itemWrap}>
        <Button
          elevation
          disable
          btnText={`${value} Likes`}
          btnTextColor="#505050"
        />
        <View style={styles.likeWrap}>
          <Button
            onPress={onLike}
            btnText="Like"
            color="blue"
            btnTextColor="white"
          />
          <View style={styles.btnDislike}>
            <Button
              onPress={onDislike}
              btnText="Dislike"
              color="red"
              btnTextColor="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
