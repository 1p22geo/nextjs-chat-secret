import Dialog from "@/components/warning";

const LoadingPage = () => {
	return (
		<div className="w-fit m-8">
			<Dialog status="loading" message="Loading important data" visible />
		</div>
	);
};

export default LoadingPage;
