type Color = {
  slug: string;
  hex: string;
  name: string;
};

type FeaturedImage = {
  alt: string;
  url: string;
};

type Combination = {
  liked: boolean;
  id: number;
  slug: string;
  color: Color;
  featuredImage: FeaturedImage;
  name: string;
  likes: number;
  colors: Color[];
};

type RelatedCombination = {
  liked: boolean;
  id: number;
  slug: string;
  name: string;
  likes: number;
  colors: string[];
};

type CombinationData = {
  combination: Combination;
  relatedCombinations: RelatedCombination[];
};

export {
  Color,
  Combination,
  FeaturedImage,
  CombinationData,
  RelatedCombination,
};
