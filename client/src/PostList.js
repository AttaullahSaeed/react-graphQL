import React, { useState } from "react";
import { getALL } from "./GraphQL/Query";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_POST } from "./GraphQL/Mutation";
const PostList = () => {
  const { loading, error, data } = useQuery(getALL);
  const [deletePost, { errr }] = useMutation(DELETE_POST);

  if (loading) {
    return <h4>Loading....</h4>;
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
  };
  const updateHandler = (res) => {
    console.log(res);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto card p-3">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.getAll.map((res, ind) => (
                  <tr key={ind}>
                    <th>{res.id}</th>
                    <td>{res.title}</td>
                    <td>{res.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removePost(res.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-info ms-3"
                        onClick={() => updateHandler(res)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostList;
