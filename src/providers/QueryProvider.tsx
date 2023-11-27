import { QueryClientProvider } from "@tanstack/react-query";
import { DefaultOptions, QueryCache, QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import React, { ReactNode } from "react";

export interface ProviderProps {
	children: ReactNode;
}

const queryConfig: DefaultOptions = {
	queries: {
		staleTime: 1000 * 60 * 5,
		retry: false,
	},
};

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (query.state.data !== undefined && isAxiosError(error)) {
				console.error(`Something went wrong: ${error.message}`);
			}
		},
	}),
});

export const ReactQueryProvider = ({ children }: ProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
