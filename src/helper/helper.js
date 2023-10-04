export const BUCKET_DOMAIN =
  "https://the-write-tool-box-bucket.s3.us-west-2.amazonaws.com/";

export const getLastNDigit = (str, n = 4) => {
  return str.substr(-n);
};
