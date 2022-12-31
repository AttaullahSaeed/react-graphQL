import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "./GraphQL/Mutation";
const AddPosts = () => {
  const [createPost, { loading, err }] = useMutation(CREATE_POST);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const addPost = () => {
    createPost({
      variables: {
        title: title,
        description: description,
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {err && "Error"}
          <div className="col-8 mx-auto card p-5 mt-5 mb-5 shadow">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => addPost()}
            >
              {loading ? "loadind..." : " Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPosts;
