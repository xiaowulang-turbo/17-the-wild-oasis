import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
        {/* <img
        src="https://rthtwjiqszchqibtoqhb.supabase.co/storage/v1/object/public/cabin-images/cabin-005.jpg"
        alt="cabin"
      /> */}
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
