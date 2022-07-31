import ListingPrice from './ListingPrice';



function ListingInfoCard({   regularPrice, type }) {
// function ListingInfoCard({  listingSize, regularPrice, type }) {
  return (
    <>
      <ListingPrice type={type} regularPrice={regularPrice} />


    </>
  );
}

export default ListingInfoCard;
