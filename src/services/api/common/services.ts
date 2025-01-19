import http from "@/services/core/axios";
import { commonRoutes } from "@/services/api/common/routes";
import {
  IGetMyAddresses,
  IOrderCompletionBody,
} from "@/services/api/common/types";

export const getMyAddresses = (): Promise<IGetMyAddresses[]> =>
  http.get(commonRoutes.myAddresses);

export const orderCompletion = (body: IOrderCompletionBody): Promise<any> =>
  http.post(commonRoutes.orderCompletion, body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Transfer-Encoding": "chunked",
      // "Connection": "keep-alive"
    },
  });
