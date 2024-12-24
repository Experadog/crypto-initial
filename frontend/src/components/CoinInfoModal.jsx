import React from "react";
import { Tag, Typography, Divider } from "antd";
import { CoinInfo } from "./CoinInfo";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>

      {coin.price && (
        <Typography.Paragraph>
          <Typography.Text strong>Price: </Typography.Text>
          {coin.price.toFixed(2)}$
        </Typography.Paragraph>
      )}
      {coin.priceBtc && (
        <Typography.Paragraph>
          <Typography.Text strong>Price BTC: </Typography.Text>
          {coin.priceBtc}
        </Typography.Paragraph>
      )}
      {coin.marketCap && (
        <Typography.Paragraph>
          <Typography.Text strong>Market Cap: </Typography.Text>
          {coin.marketCap}$
        </Typography.Paragraph>
      )}
      {coin.redditUrl && (
        <Typography.Paragraph>
          <Typography.Text strong>Reddit Url: </Typography.Text>
          {coin.redditUrl}
        </Typography.Paragraph>
      )}
      {coin.websiteUrl && (
        <Typography.Paragraph>
          <Typography.Text strong>Website: </Typography.Text>
          <a href={coin.websiteUrl}>{coin.websiteUrl}</a>
        </Typography.Paragraph>
      )}
    </>
  );
}
