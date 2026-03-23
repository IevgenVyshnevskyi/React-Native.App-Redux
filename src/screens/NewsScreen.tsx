import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { useSelector } from '../store';
import { setNews, setLoading } from '../store/newsSlice';
import { styles } from '../theme/styles';

const API_KEY = 'MY_API_KEY';

function NewsScreen() {
  const dispatch = useDispatch();
  const { articles, loading } = useSelector(state => state.news);

  useEffect(() => {
    const fetchNews = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`,
        );
        dispatch(setNews(response.data.articles));
      } catch (error) {
        console.log('Помилка завантаження:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (articles.length === 0) {
      fetchNews();
    }
  }, [articles.length, dispatch]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <View style={[styles.card, { marginBottom: 20 }]}>
              {item.urlToImage ? (
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{
                    width: '100%',
                    height: 180,
                    borderRadius: 10,
                    marginBottom: 12,
                  }}
                />
              ) : null}

              <Text style={[styles.title, { textAlign: 'left', fontSize: 18 }]}>
                {item.title}
              </Text>

              <View
                style={{
                  height: 1,
                  backgroundColor: '#eee',
                  marginVertical: 10,
                }}
              />

              <Text
                style={[styles.text, { textAlign: 'left' }]}
                numberOfLines={4}
              >
                {item.description ||
                  'Опис новини відсутній. Перейдіть на сайт для детальнішої інформації.'}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default NewsScreen;
