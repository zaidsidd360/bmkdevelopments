import { useParams } from "react-router-dom";
import { servicesData } from "../helper";
import ServicePage from "../components/ServicePage";

const ServiceRoute = () => {
	const { service } = useParams();
	const serviceData = servicesData[service as keyof typeof servicesData];

	return <ServicePage key={service} {...serviceData} />;
};

export default ServiceRoute;
