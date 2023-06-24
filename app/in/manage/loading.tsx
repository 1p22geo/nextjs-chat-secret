import Dialog from "@/components/warning";

const LoadingPage = () => {
	return (
		<div className="w-fit mx-auto mt-24 sm:ml-8">
			<Dialog status="loading" message="Loading important data" visible />
		</div>
	);
};

export default LoadingPage;
