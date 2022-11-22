import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: "vz5j8nml",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skS3DVzArbjK7RBmRODcH79yQ5rmcHAHoghfxfLy6i2dKAM7cwu3oFBddFGTsDNQ6FwzrUknGHl1OMJlnR3TvytvMN93QPKCdnNFPXFuqfTfUlTsyHaDqYrcFtOE6IxekMd89QgCavzjwhOhAqQxfHqD0wqs6TjpLS76pvDuzuk2cy1InCmu'
  

});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
