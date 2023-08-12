import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useParams } from "react-router-dom";
import axios from "../../../helper/axios";
import message from "../../../helper/message";

export default function AccountActivation() {
  const [loading, setLoading] = useState(false);

  const id = useParams()?.id;

  useEffect(() => {
    setLoading(true);

    axios
      .post("/activate-account", { id })
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          // go to login page
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something Went Wrong!!!");
      });
  }, [id]);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      jhszfhgsaf bjhydgas jgbuasfc
    </LoadingOverlay>
  );
}
