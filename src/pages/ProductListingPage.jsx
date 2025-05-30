import Dropdown from "../components/DropDown";
import FilterGroup from "../components/FilterGroup";
import Filters from "../components/Filters";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Layout from "./Layout";

const ProductListingPage = () => {
    return (
        <>
            <Layout>
                <div className="max-w-[1240px] m-auto flex flex-col md:flex-row pt-8 pb-36 gap-7 px-[25px]">
                    <div className="relative flex gap-[10px] sm: flex-col">
                        <Dropdown />
                        <Filters></Filters>
                    </div>
                    <Section>
                        <ProductListing mobileShowItens={8} desktopShowitens={15}></ProductListing>
                    </Section>
                </div>
            </Layout>
        </>
    );
}

export default ProductListingPage;